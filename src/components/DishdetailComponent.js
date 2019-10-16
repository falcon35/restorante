import React, {Component}  from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem,Modal,ModalHeader,ModalBody,Button,Label,Row,Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const required=(val)=>val&&val.length;
const maxlength=(len)=>(val)=>!(val)||(val.length<=len);
const minlength=(len)=>(val)=>(val)&&(val.length>=len);

class ComponentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            }
        );
    }
    handleSubmit(values){
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                 Submit Comment
                 </ModalHeader>
                 <ModalBody>
                
 <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
<Row className="form-group">
<Label htmlFor="rating" md={2}>Rating</Label>
<Col md={10}>
<Control.select model=".rating" name="rating"className="form-control">
     <option>1</option>
     <option>2</option>
     <option>3</option>
     <option>4</option>
      </Control.select>
</Col>
</Row>
<Row className="form-group">
    <Label htmlFor="author" md={2}>Name</Label>
    <Col md={10}>
        <Control.text model=".author" id="author" placeholder="Your Name" className="form-control" 
        validators={{
            required,
            minlength:minlength(2),maxlength:maxlength(15)}}/>
            <Errors className="text-danger" model=".Name" show="touched"
  messages={{
      required: 'Required',
      minlength: 'Must be greater than 2 characters',
      maxlength: 'Must be 15 characters or less'
  }}/>
    </Col>
</Row>


<Row className="form-group">
     <Label htmlFor="comment" md={2}> Comment</Label>
        <Col md={10}>
        <Control.textarea model=".comment" id="comment" name="comment"  rows="6"className="form-control" />
        </Col>
</Row>
<Row className="form-group">
    <Col md={{size:10, offset:2}}>
        <Button type="submit" color="primary">Submit</Button>
    </Col>
</Row>
</LocalForm>
                 </ModalBody>

                </Modal>
            </div>
        )
    }
}

 
   
  function  RenderDish({dish}) {
       
            return(
                <Card>
                  
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                </Card> 
            )
        }
        
        
    

    function RenderComments({comments,addComment,dishId}){
    
        if (comments != null)
        {
            return (
               
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit'  }).format(new Date(comment.date))}</p>
                </li>
                  ); 
                 } )}
                </ul>  
                <ComponentForm dishId={dishId} addComment={addComment}/>                  
                </div>
                
            );
           
            
    }
} 
    
        const Dishdetail =(props)=>{
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
          else  if(props.dish!=null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                          
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} addComment={props.addComment}  dishId={props.dish.id}/>
                        
                        </div>
                </div>
                </div>
        );
        else return(
            <div></div>)
        }
   
     


export default Dishdetail;