//ACTION CREATORS GO HERE

//lodash lib --- //FOR THE SECOND SOLUTION TO THE 100 XHR CALLS
import _ from "lodash";

//to use a pre-configured axios instance to make request inside of the action creator
import jsonPlaceholder from "../apis/jsonPlaceholder";

//FOR THE SECOND SOLUTION TO THE 100 XHR CALLS
// when we call fetchPostsAndUsers you have to pass the result of calling it into into the dispatch function. So its manually dispatching the result of calling the action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //you have to import this action creator to PostList so this gets called

  await dispatch(fetchPosts()); //await makes sure nothing below this line executes until we sucessfully fetch the list of post and dispatched the action for it

  //now we use lodash
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// //MEMOIZED VERSION USING LODASH
// export const fetchUser = id => dispatch => {
//   //You have to _.memoize (part of lodash) this function because it makes calls to EACH USER 10 times seperately (100 XHR calls total) which is an issue.

//   //the underscore is put before the function so we know not to use it elsewhere, unless you know what you are doing. IT INDICATES THAT ITS A PRIVATE FUNCTION. We then pass id and dispatch as args so it's passed into the _fetchUser from export const
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
