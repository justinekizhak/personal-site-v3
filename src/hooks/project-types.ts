import * as t from "io-ts"

import decodeWith from "../validations"

const projectDetailsCodec = t.type(
  {
    content: t.type(
      {
        title: t.string,
        domain: t.string,
        summary: t.string,
        description: t.string,
      },
      "content"
    ),
    full_slug: t.string,
    name: t.string,
  },
  "project-details"
)

const projectListCodec = t.array(projectDetailsCodec, "project-list")

export const decodeProjectList = decodeWith(projectListCodec)

export type IProjectDetails = t.TypeOf<typeof projectDetailsCodec>
