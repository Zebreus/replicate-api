import { convertPrediction, PredictionResponse } from "convertPrediction"
import { makeApiRequest, Options } from "makeApiRequest"

type GetPredictionOptions = {
  /** The id of a prediction */
  id: string
} & Options

export const getPrediction = async (options: GetPredictionOptions) => {
  const response = await makeApiRequest<PredictionResponse>(options, "GET", `predictions/${options.id}`)
  return convertPrediction(options, response)
}