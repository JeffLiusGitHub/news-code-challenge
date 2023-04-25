import React from 'react';
import MainPage from './Page/MainPage';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
	return (
		<ErrorBoundary>
			<MainPage />
		</ErrorBoundary>
	);
}

export default App;
