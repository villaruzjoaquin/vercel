/* 
		   Display Templating:

		   toDoItems.forEach(todo => 
			document.querySelector('.display-list').insertAdjacentHTML("afterbegin", todo));
			  
*/
async function appInit() {

	const appData = await getToDoData();
	// Interactive Templating
	const toDoItems = Object.values(appData).map((obj) => {
		// inside the object, access the "todo" field
		return toDoItemTemplate(obj.todo);
	});



	//render function jsx +++ data
	// template function() passing the data =====> template string html string

	// interactive templating
	// container
	// batch update ... to dom updates all at once
	// const div = document.createElement('div');

	// toDoItems.forEach((markup => {
	// 	div.appendChild(markup);
	// }))

	// document.querySelector("main").append(div);


}

appInit();