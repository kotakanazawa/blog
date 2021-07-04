import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日(iii)', {locale: ja})}</time>
}
