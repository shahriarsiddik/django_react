import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';
import './main.css';


class EmployeeFeed extends React.Component{
    constructor(){
        super();
        this.state = {
            'items':[]
        }
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        fetch('http://localhost:8000/api/employee/')
            .then(results => results.json())
            .then( results  => this.setState({'items':results}));
    }
    render(){
        return (
            <ul>
                {
                    this.state.items.map(
                        function (employee, index) {
                            return (
                                <EmployeeCardView employee={employee} index={index}/>
                            )
                        }
                    )
                }
            </ul>
        );
    }
}

class EmployeeCardView extends React.Component {
    render(){
        return (
            <Row className="CardIndex">
                <Col xs="3"></Col>
                <Col sm="6" xs="6">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                Employee {this.props.index}
                            </CardTitle>
                            <Col xs="3">
                                <CardImg src="data:image/png;base64,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">

                                </CardImg>
                            </Col>
                            <Col xs="9">

                                <CardText>
                                    <div>Name : {this.props.employee.first_name} {this.props.employee.last_name}</div>
                                    <div>Phone Number : {this.props.employee.phone_number}</div>
                                </CardText>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            // <div key={this.props.index}>
            //     <h1>Employee {this.props.index}</h1>
            //     <p>First Name: {this.props.employee.first_name}</p>
            //     <p>Last Name: {this.props.employee.last_name}</p>
            //     <p>Phone Name: {this.props.employee.phone_number}</p>
            // </div>
        )
    }
}


ReactDOM.render(
    <EmployeeFeed/>,
    document.getElementById('root')
)