import React from 'react';

 
const subCatForm = (props) => {
        
        switch(props.category) {
            case "Beer":
                return(
                    <div className="Beersubcategories" >
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="IPA"/> IPA
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Stout" />Stout
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Heffeweizen" /> Heffeweizen
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Lager" /> Lager
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Sour" /> Sour
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Seltzer" /> Seltzer
                        <input onClick={(e) => props.handleChange(e)} name="subcategory" type="radio" value="Other" /> Other
                    </div>
                )
            case "Wine":
                return(
                    <div className="WineSubCategories">
                    <input name="subcategory" type="radio" value="Red" onClick={(e) => props.handleChange(e)}/> Red
                    <input name="subcategory" type="radio" value="White" onClick={(e) => props.handleChange(e)}/>White
                    <input name="subcategory" type="radio" value="Sparkling" onClick={(e) => props.handleChange(e)}/> Sparkling
                </div>
                )
            case "Spirit":
                return(
                    <div className="SpiritSubCategories">
                    <input name="subcategory" type="radio" value="Whisky" onClick={(e) => props.handleChange(e)}/> Whisky
                    <input name="subcategory" type="radio" value="Vodka" onClick={(e) => props.handleChange(e)}/>Vodka
                    <input name="subcategory" type="radio" value="Gin" onClick={(e) => props.handleChange(e)}/> Gin
                    <input name="subcategory" type="radio" value="Tequila" onClick={(e) => props.handleChange(e)}/> Tequila
                    <input name="subcategory" type="radio" value="Rum" onClick={(e) => props.handleChange(e)}/> Rum
                    <input name="subcategory" type="radio" value="Other" onClick={(e) => props.handleChange(e)}/> Other
                </div>
                )
            default:
                return(
                    <></>
                )
        }
    

}

export default subCatForm