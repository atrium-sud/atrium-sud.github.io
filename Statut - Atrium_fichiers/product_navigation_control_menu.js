/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

(function () {
	var adjustScrollTop = function () {
		var controlMenuContainer;
		var controlMenuContainerScroll;
		var errorFieldLabel;
		var labelScroll;

		errorFieldLabel = document.querySelector(
			'.form-group.has-error .control-label'
		);

		if (errorFieldLabel) {
			labelScroll = errorFieldLabel.clientHeight || 0;

			window.scrollBy(0, -labelScroll);
		}

		controlMenuContainer = document.querySelector(
			'.control-menu-container'
		);

		if (controlMenuContainer) {
			controlMenuContainerScroll = controlMenuContainer.offsetHeight || 0;

			window.scrollBy(0, -controlMenuContainerScroll);
		}
	};

	window.addEventListener('hashchange', adjustScrollTop);

	var handlePageLoad = function () {
		if (window.location.hash) {
			adjustScrollTop();
		}
	};

	window.addEventListener('load', handlePageLoad);

	var handleFormRegistered = function (event) {
		if (event.form && event.form.formValidator) {
			AUI().Do.after(
				adjustScrollTop,
				event.form.formValidator,
				'focusInvalidField'
			);
		}
	};

	Liferay.on('form:registered', handleFormRegistered);
})();
