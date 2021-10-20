import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Ordinal")
  .withDescription(`Converts an integer to its ordinal as a string.`)
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
  .withStringResult()
  .withRequiredNumberParam("number")
  .withExample({ number: 22 })
  .run(({ number }) => Humanize.ordinal(number));