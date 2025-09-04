// export default function withClass(WrappedComponent, className) {

//   function ReturnedComponent(props) {
//     return <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   }

//   return ReturnedComponent
// }

const withClass = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
)

export default withClass