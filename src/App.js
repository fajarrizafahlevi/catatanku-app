import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ThemeContext from './context/ThemeContext';
import LocaleContext from './context/LocaleContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem('theme') || 'light',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme =
              prevState.themeContext.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);

    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.theme) {
      document.documentElement.setAttribute(
        'data-theme',
        this.state.themeContext.theme
      );
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeContext.Provider value={this.state.themeContext}>
          <LocaleContext.Provider value={this.state.localeContext}>
            <div className="note-app">
              <header className="note-app__header">
                <Navigation user={this.state.authedUser} />
              </header>
              <main className="note-app__body">
                <Routes>
                  <Route
                    path="/*"
                    element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
            </div>
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      );
    }

    return (
      <ThemeContext.Provider value={this.state.themeContext}>
        <LocaleContext.Provider value={this.state.localeContext}>
          <div className="note-app">
            <header className="note-app__header">
              <Navigation user={this.state.authedUser} logout={this.onLogout} />
            </header>
            <main className="note-app__body">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/new" element={<AddPage />} />
                <Route path="/archives" element={<ArchivePage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
