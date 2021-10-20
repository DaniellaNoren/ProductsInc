﻿class Persondetails extends React.Component {
    constructor(props) {
        super(props)
    }
    personInfo() {
        $(window).scrollTop(0)
        return (
            <div id="#reactcontainer">
                <div id="reactwrapper">
                    <br/>
                    <h4>Person Details:</h4>
                    <br />
                    PersonId: {this.props.personobj.personId}
                    <br />
                    Name: {this.props.personobj.personName}
                    <br />
                    PhoneNumber: {this.props.personobj.personPhoneNumber}
                    <br />
                    City: {this.props.personobj.city.cityName}
                    <br />
                    Country: {this.props.personobj.city.country.countryName}
                    <br />
                </div>
                <br />
                Languages:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select id="SelectedListBoxView" size="5" disabled multiple="multiple">
                    {this.props.personobj.personLanguages.map((listitem) => (
                        <option key={listitem.language.languageId} value={listitem.language.languageId}>{listitem.language.languageName}</option>
                        ))}
                    </select>
                <br />
                    <div>
                    <button id="optionBtnGray" onClick={() => onClickGoBackToList(this.props.setViewPage)}>Back to React Peoplelist</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="optionBtnRed" onClick={() =>
                        window.confirm("Are you sure you wish to delete this person?") &&
                        onClickDeletePerson(this.props.personobj, this.props.setViewPage, this.props.loadDataFromServer)}>
                        Delete this Person
                    </button>
                    </div>
            </div>

        )
        $(window).scrollTop(0)
    }


    render() {
        return (
            <div>
                {this.personInfo()}
            </div>
        )
    }

} // class end tag


function onClickDeletePerson(personobj, setViewPage, loadDataFromServer) {

    $.ajax({
        type: "POST",
        url: "/React/DeletePerson",
        data: "id=" + personobj.personId,
        success: function (data) {
            loadDataFromServer()
            setViewPage("peoplelisttable")
            document.getElementById("reactactionmessage").textContent =
                `Person: ${personobj.personName} with Id: ${personobj.personId}, is now deleted.`
        },
        error: function (jqXHR, textStatus, errorThrown) {
            document.getElementById("reactactionmessage").textContent =
                `FAILED to Delete: ${personobj.personName}. (Does not exist).`
        }

    })

}

function onClickGoBackToList(setViewPage) {
    setViewPage("peoplelisttable")
    $(window).scrollTop(0)
}