import { onMount } from 'solid-js'
import { Elm } from '~/elm/Main.elm'

export default function ElmTest() {
  let elmDiv: HTMLDivElement | undefined

  onMount(() => {
    if(elmDiv) {
      Elm.Main.init({
        node: elmDiv,
      })
    }
  })

  return (
    <div class="mt-30 text-white ml-8">
      <h1>
      Elm test 2
      </h1>
      <div ref={elmDiv}>Loading...</div>
    </div>
  )
}
