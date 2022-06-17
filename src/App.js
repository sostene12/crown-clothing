import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-and-signup/signin-and-signup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// use of redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // 192.168.43.30
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("user", this.props.currentUser);
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          {/* <Route path="signin" element={<SignInAndSignUpPage />} /> */}
          <Route
            path="signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
