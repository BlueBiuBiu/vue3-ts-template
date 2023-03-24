import { Request } from ".."

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

export function getMultidata(url: string) {
  return Request.get<IHomeData>({
    url
  })
}
