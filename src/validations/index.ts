import * as T from "io-ts"
import { PathReporter } from "io-ts/PathReporter"
import { isRight } from "fp-ts/lib/Either"

const decodeWith =
  <ApplicationType = any, EncodeTo = ApplicationType, DecodeFrom = unknown>(
    codec: T.Type<ApplicationType, EncodeTo, DecodeFrom>
  ) =>
  (input: DecodeFrom): ApplicationType => {
    const res = codec.decode(input)

    if (isRight(res)) {
      return res.right
    }
    console.error(PathReporter.report(res))
    throw new Error("validation error")
  }
export default decodeWith
