
import React from 'react'
import './contact.css'// Import du contact css

// function Contact(props){
//     return (
//         <div className="Contact">
//         <img className="avatar" src={props.avatar} alt={props.name} />
//         <div>
//           <p className="name">{props.name}</p>
//           <div className="status">
//             <div className={props.online ? "status-online" : "status-offline"} />
//             <p className="status-text">
//               {props.online ? "online" : "status-offline"}
//             </p>
//           </div>
//         </div>
//       </div>
//     )
// }

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      online :props.online
    }
  }
  render(){
    return(
      <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status">
          <div className={this.state.online ? "status-online" : "status-offline"} />
          <p className="status-text"
           onClick={event => {
            const onlineStatus = !this.state.online;
            this.setState({ online: onlineStatus });
          }}>
            {this.state.online ? "online" : "status-offline"}
          </p>
        </div>
      </div>
    </div>
    )
  }


}

export default Contact


