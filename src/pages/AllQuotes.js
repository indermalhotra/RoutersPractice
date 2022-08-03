import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_DATA = [
    {id:"a1", author:"Inder", text:"Every thing is great"},
    {id:"a2", author:"Ekum", text:"will achive many thing in life"}
];

const AllQuotes = () => {
    return(
        <QuoteList quotes={DUMMY_DATA}/>
    );
}

export default AllQuotes;