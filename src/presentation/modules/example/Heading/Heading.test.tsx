
import { render } from '@/tests/utils'
import { Heading } from './Heading'

describe('Button Component', () => {
  it('should render correctly', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Heading children={undefined} colorDark={false} as={'h1'} size={'xsmall'} uppercase={false} />)
  })
})
