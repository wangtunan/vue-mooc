import { IMessage } from 'element-plus/lib/el-message/src/types'
import { useAppConfig } from './useAppConfig'

export function useMessage () {
  const Message = useAppConfig().$message as IMessage
  return Message
}
