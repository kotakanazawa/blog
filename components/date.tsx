import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function Date({ dateString }: { dateString: string}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd', { locale: ja })}</time>
}
