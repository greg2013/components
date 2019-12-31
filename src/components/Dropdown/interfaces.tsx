import { ColorVariants } from '../../helpers/ColorVariants'

export interface Item {
  /* Item text */
  text: string
  /* Redirect or handle other click events */
  onClick: (event: React.MouseEvent<any>) => void
  /* Item event key */
  eventKey?: string
  /* Item variant color */
  variant?: ColorVariants
  /* Item id */
  id?: string | undefined
  /* Item key */
  key?: string
  /* Custom style */
  style?: Record<string, any>
}
