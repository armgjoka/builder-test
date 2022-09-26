import { Heading } from '@components/Heading'

interface TextProps {
  options: {
    title: string
    description: string
  }
}

const Text = (props: any) => {
  return (
    <div className="py-30">
      <Heading title={props.options?.title} />
      <div dangerouslySetInnerHTML={{ __html: props.options?.description }} />
    </div>
  )
}

export default Text
