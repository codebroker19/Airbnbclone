import React,{useState} from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
function Search()
{
  const [startDate,setStartDate]=useState(new Date());
  const [enddate,setenddate]=useState(new Date());
const selectionrange={
  startDate:startDate,
  enddate:enddate,
  key:"selection",
};
function handlechange(ranges)
{
  setStartDate(ranges.selection.startDate);
  setenddate(ranges.selection.enddate);
}
  return(<div className="search">
  <DateRangePicker ranges={[selectionrange]} onChange={handlechange}/>
  
  <input className="inputdiv"defaultValue={1} type="number"></input>
  <button className="browse">Browse</button>
    </div>);
}
export default Search;
