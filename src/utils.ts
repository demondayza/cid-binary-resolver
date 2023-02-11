import { CID } from 'multiformats/cid'
import * as json from 'multiformats/codecs/json'
import { sha256 } from 'multiformats/hashes/sha2'



export const GenerateCID = async (data: string): Promise<any> => {
  const bytes = json.encode({ base64filereprepresentation: data })
  const hash = await sha256.digest(bytes)
  const cid = CID.create(1, json.code, hash)
  return cid;
}
