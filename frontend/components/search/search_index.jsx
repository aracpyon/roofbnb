import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchMap from '../map/search_map';


class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentDidUpdate(prevProps){
    if(this.props.searchForm.keyword !== prevProps.searchForm.keyword){
      this.props.fetchSearchResult(this.props.searchForm.keyword);
    }
  }

  componentDidMount(){
    this.props.fetchSearchResult(this.props.searchForm.keyword);
    
  }

  render(){
  
    const { spots, photos } = this.props;
    const placeToStay = (spots.length >= 1) ? 'Places to Stay' : 'Place to Stay'
    return (
      <div className="search-result-container">
        <div className="search-items-container">
          <div className="search-items-num">{spots.length} {placeToStay}</div>
          {spots.map(spot => {
            return <SearchIndexItem spot={spot} photos={photos[spot.name]} key={spot.id} />
          })
          }
        </div>
        
        <SearchMap spots={spots} />
      </div>
    )
  }
}

export default SearchIndex;