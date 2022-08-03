import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import { DUMMY_DATA } from "./AllQuotes";
import Comments from "../components/comments/Comments";
import HHighlightedQuote from '../components/quotes/HighlightedQuote';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    
    const param = useParams();
    let quoteData = DUMMY_DATA.find( quote => quote.id === param.quoteId );
    console.log(quoteData);

    if(!quoteData){
        return <p>No Quote Found</p>;
    }else{
        return(
            <Fragment>
                <HighlightedQuote text={quoteData.text} author = {quoteData.author}/>
                <Route path={`/quotes/:quoteId/comments`}>
                    <Comments/>
                </Route>
            </Fragment>
        );
    }

    
}

export default QuoteDetail;