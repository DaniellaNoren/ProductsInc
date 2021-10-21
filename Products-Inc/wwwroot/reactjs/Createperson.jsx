class CreatePerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            createperson: {
                PersonName: "",
                PersonPhoneNumber: "",
                PersonCity: 0
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     //  I am skipping the frontend validation code requirement.. i have been working enought on this as it is /Eric R



    handleSubmit(event) {
        event.preventDefault();

        onSubmitCreatePerson(this.state.createperson)
    }



    createPersonForm() {
        return (
            <div id="fieldset">
                <div id="divboxtitle">
                    Create a new Person
                </div>

                <form className="reactform" id="legbox" onSubmit={this.handleSubmit}>
                    <br />
                    <label>
                    Name:
                        <div><input type="text"
                            
                            required /></div>
                    </label>
                    <br /><br />
                    <label>
                    PhoneNumber:
                        <div><input type="text"
                            
                            required /></div>
                    </label>
                    <br /><br />
                    <label>
                    City (country is allready linked to city:
                            <div><select id="SelectedListBoxView" defaultValue={"ChooseCity"}
                            
                            required >

                            <option value="ChooseCity" disabled> - Choose City -</option>



                        </select></div>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <br />
                <button id="optionBtnGray" onClick={() => onClickGoBackToList(this.props.setViewPage)}>Back to React Peoplelist</button>
            </div>
        )
    }


    render() {
        return (
            <div className="flexwrap">
                {this.createPersonForm()}
            </div>
        )
    }

} // class end tag


function onSubmitCreatePerson(createdpersonobj) {

    let createdpersonjson = JSON.stringify(createdpersonobj)
    //console.log(createdpersonjson)

    $.ajax({
        type: "POST",
        url: "/React/CreatePerson",
        data: createdpersonjson,
        success: function (data) {
            loadDataFromServer()
            setViewPage("peoplelisttable")
            $(window).scrollTop(0)
            document.getElementById("reactactionmessage").textContent = `New person is now saved.`
        },
        error: function (jqXHR, textStatus, errorThrown) {
            document.getElementById("reactactionmessage").textContent = `FAILED to create new person.${textStatus} ,  ${errorThrown}`
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        mimeType: "text/html"
    })

}

function onClickGoBackToList(setViewPage) {
    setViewPage("peoplelisttable")
    $(window).scrollTop(0)
}


ReactDOM.render(<CreatePerson />, document.getElementById('reactcontent'));
