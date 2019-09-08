function getName(name){
    alert('Hello '+ name);
}
class Tsnaken extends React.Component{
    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state ={sohocvien: 10,}
        this.addStudent = this.addStudent.bind(this);
    }

    buttonClick(){
        alert(this.props.children)
    }
    
    addStudent(){
        this.setState({sohocvien: this.state.sohocvien +1});
    }

    render(){
            return(
                <div>
                    <h2 className="mau">{this.props.ten} - {this.props.ho}</h2>
                    <div>Số học viên: {this.state.sohocvien}</div>
                    <p>{this.props.children}</p>
                    <button onClick={this.buttonClick}>Thông tin</button><p/>
                    <button onClick={() =>{var s= this.props.ho + ' ' +this.props.ten;getName(s);}}>Hiển thị tên</button>&nbsp;
                    <button onClick={this.addStudent}>Thêm học viên</button>
                    <Karoo/>
                </div>
            );   
    }
};
class Karoo extends React.Component{
    render(){
        return(
            <h3>React Js</h3>
        );
    }
};
ReactDOM.render(
    <div>
        <h1><i>SangST</i></h1>
        <Tsnaken ten="ReactJs" ho="tutorial">React For beginer</Tsnaken>
    </div>,
    document.getElementById("root")
);