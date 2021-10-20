class MenuButtons extends React.Component {

    constructor(props) {
        super(props)
    }

    changeViewMenu = (viewpage) => {
        //console.log(viewpage)
        this.props.setViewPage({ viewpagestate: viewpage })
    }

    render() {
        return (
            <button className="nav-link text-dark" onClick={() => this.changeViewMenu('createperson')}> <img src={"./img/cart.jpg"} width="30" height="30"/></button>
        )

    }


} // class end tag   



