import { jwtDecode, JwtPayload } from 'jwt-decode'

export interface DecodePayload extends JwtPayload {
  _id: string
  email: string
  role: 'admin' | 'user'
}

const decodeToken = (token: string): DecodePayload => {
  return jwtDecode(token)
}

export default decodeToken