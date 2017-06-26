export default (props) => {
  return (
    <ul>
      {
        _.map(props.sections, (section) => <li>{section.name}</li>)
      }
    </ul>
  )
}