const loginUser = async values => {

    const res = await fetch({ url: SERVER_URL, method: "POST", body: values });
    const data = await res.json();
    return data;
};

    class Index extends React.Component {

    constructor(props) {
        super(props)
        //this.setViewPage = this.setViewPage.bind(this)  dont need to bind when doing arrows jsx below /ER
        //this.setPersonobjstate = this.setPersonobjstate.bind(this)
        this.state = {
            personliststate: [],
            cityliststate: [],
            viewpagestate: "peoplelisttable",
            personobj: [],
            peoplelistapiurl: "/Reactjsonpersonlist",
            citylistapiurl: "/Reactjsoncitylist"
        }
    }



    loadDataFromServer = () => {
        /*
       const xhr = new XMLHttpRequest();
        xhr.open('get', this.state.peoplelistapiurl, true)
        xhr.onload = () => {
            const personlist = JSON.parse(xhr.responseText)
            this.setState({ personliststate: personlist })
        }
        xhr.send()

        const xhr2 = new XMLHttpRequest();
        xhr2.open('get', this.state.citylistapiurl, true)
        xhr2.onload = () => {
            const citylist = JSON.parse(xhr2.responseText)
            this.setState({ cityliststate: citylist })
        }
        xhr2.send()*/

        /* axios.get(this.state.peoplelistapiurl)
     .then(dbdata => {
         this.setState({ personlistdata: dbdata });
     })
     .catch(e => {
         console.log(e)
     });*/
    }


    componentDidMount = () => {
        this.loadDataFromServer();
        window.setInterval(this.loadDataFromServer(), this.props.pollInterval);
    }

    setViewPage = (viewpage = this.state.viewpagestate) => {
        this.setState({ viewpagestate: viewpage })
    }

    setPersonobjstate = (person = this.state.personobj) => {
        this.setState({ personobj: person })
    }



    render() {
        $(window).scrollTop(0)

        return (
            <div>

                <ChangeView
                    viewpagestate={this.state.viewpagestate}
                    personliststate={this.state.personliststate}
                    cityliststate={this.state.cityliststate}
                    setViewPage={this.setViewPage}
                    loadDataFromServer={this.loadDataFromServer}
                    setPersonobjstate={this.setPersonobjstate}
                    personobj={this.state.personobj}
                />
                <MenuButtons
                    setViewPage={this.setViewPage}
                />
        </div>
        )

    }


} // class end tag



function ChangeView({ viewpagestate, personliststate, cityliststate, setViewPage, loadDataFromServer, setPersonobjstate, personobj }) {
    return (
        <SwitchView active={viewpagestate}>
            <Peoplelisttable
                name="peoplelisttable"
                personliststate={personliststate}
                setViewPage={setViewPage}
                setPersonobjstate={setPersonobjstate}
            />
            <Persondetails
                name="persondetails"
                personliststate={personliststate}
                setViewPage={setViewPage}
                loadDataFromServer={loadDataFromServer}
                personobj={personobj}
            />
            <CreatePerson
                name="createperson"
                cityliststate={cityliststate}
                setViewPage={setViewPage}
                loadDataFromServer={loadDataFromServer}
            />
        </SwitchView>
    )
}

ReactDOM.render(<MenuButtons />, document.getElementById('reactmenubuttons'))

ReactDOM.render(<Index pollInterval={2000} />, document.getElementById('reactcontainer'))

