module Main exposing (main)

import Array
import Browser
import Html exposing (Html, pre, text)
import Html.Attributes exposing (class)
import Http
import Json.Decode as D
import Json.Decode.Pipeline as P
import Url.Builder as UB



-- MAIN


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- MODEL


type Model
    = Failure Http.Error
    | Loading
    | Success ServerResponse


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading
    , getProjectList
    )



-- UPDATE


type Msg
    = GotText (Result Http.Error ServerResponse)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotText result ->
            case result of
                Ok fullText ->
                    ( Success fullText, Cmd.none )

                Err err ->
                    ( Failure err
                    , Cmd.none
                    )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    case model of
        Failure _ ->
            text "Error fetching the list of projects."

        Loading ->
            text "Loading..."

        Success projectList ->
            pre [ class "bg-red-500" ] [ text ("name: " ++ getName projectList) ]



-- getName : List ProjectDetails ProjectDetails


getName : ServerResponse -> String
getName res =
    case Array.fromList res.stories |> Array.get 0 of
        Just projectDetails ->
            projectDetails.name

        Nothing ->
            "NONE"



-- HTTP


baseUrl : String
baseUrl =
    "https://api.storyblok.com/v1/cdn"


token : String
token =
    "QcidRr0B5ytSNhz7RCptbAtt"


page : number
page =
    0


perPage : number
perPage =
    50


fullUrl : String
fullUrl =
    UB.crossOrigin
        baseUrl
        [ "stories" ]
        [ UB.string "version" "published"
        , UB.string "token" token
        , UB.int "page" page
        , UB.int "per_page" perPage
        , UB.string "request_from" "elm"
        ]


getProjectList : Cmd Msg
getProjectList =
    Http.get
        { url = fullUrl
        , expect = Http.expectJson GotText resDecoder
        }


type alias ProjectDetails =
    { name : String
    , id : Int
    , slug : String
    , published_at : String
    }


type alias ServerResponse =
    { stories : List ProjectDetails
    }


resDecoder : D.Decoder ServerResponse
resDecoder =
    D.map ServerResponse
        (D.field "stories"
            (D.list
                (D.succeed
                    ProjectDetails
                    |> P.required "name" D.string
                    |> P.required "id" D.int
                    |> P.required "slug" D.string
                    |> P.required "published_at" D.string
                )
            )
        )
