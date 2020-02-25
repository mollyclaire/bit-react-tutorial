import React from "react";

// export function Input(props) {
//   return (
//     <span className="ui input">
//       <input style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="form-control" {...props} />
//     </span>
//   );
// }

const Form = (props) => {
  return (
    <button {...props} style={{ marginBottom: 50 }} className="ui button">
      {props.children}
    </button>
  );
}

export default Form;

// export default class Form extends React.Component {
//     render() {
//     return (
        
//         <form style={{marginLeft: "10.5%"}}>
//       <span className="ui input">
//         <input style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="form-control" {...this.props} />
//       </span>
  
 
//       <button {...this.props} style={{ marginBottom: 50 }} className="ui button">
//         {this.props.children}
//       </button>
//       </form>
//     )
//     }
// }