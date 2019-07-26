import './index.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'modules';
import { IntlProvider } from 'react-intl';
// @ts-ignore
import { LocaleProvider } from 'beehive';
import ChatHistory from './ChatHistory';
import ChatInterface from './ChatInterface';
import { SystemState } from 'modules/types/system';
import { updateSession } from 'modules/actions/system';

import { ChatState } from 'modules/types/chat';
import { sendMessage } from 'modules/actions/chat';
import { thunkSendMessage } from './thunks';
import { localMessages, locales } from 'utils';
interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: '',
  };

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName',
    });
    this.props.sendMessage({
      user: 'Chat Bot',
      message: `This is a very basic chat application written in typescript using react
        and redux. Feel free to explore the source code.`,
      timestamp: new Date().getTime(),
    });

    this.props.thunkSendMessage('This message was sent by a thunk!');
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  }

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message,
      timestamp: new Date().getTime(),
    });
    this.setState({ message: '' });
  }

  render() {
    const locale = 'zh-CN';

    return (
      <IntlProvider
        locale={locale}
        messages={localMessages[locale]}
        key={locale}
      >
        <LocaleProvider locale={{ locale: locales[locale] }}>
          <div className="parent">
            <ChatHistory messages={this.props.chat.messages} />
            <ChatInterface
              userName={this.props.system.userName}
              message={this.state.message}
              updateMessage={this.updateMessage}
              sendMessage={this.sendMessage}
            />
          </div>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat,
});

export default connect(
  mapStateToProps,
  { sendMessage, updateSession, thunkSendMessage },
)(App);
