/**
 * Abstract observalbe class.
 * 
 * @author Joseph Fehrman
 * @since 25 June, 2017
 */
var Observable = function(){
  var subscribers = [];

  /**
   * Get subscriber from database
   *
   * @return List of subscribers.
   */
  function getSubscribers(){
    return subscribers;
  }
 
  /**
   * Notify all subscribers.
   */
  function fire(){
    subscribers.forEach(function(item){
      console.log("Fire function must be implemented to notify the subscriber.");
    });
  }

  /**
   * Subscribe to observable.
   */
  function subscribe(subscriber){
    subscribers.push(subscriber);
  }

	/**
	 * Unsubscribe from observable.
	 */
	function unsubscribe(subscriber){
		subscribers = subscribers.filter(
			function(item){
        if(item !== subscriber){
			  	return item
			  }
      }
		);
  }

  return {
    "getSubscribers" : getSubscribers,
    "fire" : fire,
    "subscribe" : subscribe,
    "unsubscribe" : unsubscribe,
  }
}
