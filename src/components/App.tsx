import { Provider } from "mobx-react";
import React, { FC } from "react";

import MainRouter from '../router/MainRouter';
import { rootStore } from "../stores";

const App: FC = () => (
		<Provider {...rootStore} >
			<MainRouter />
		</Provider>
	);

export default App;