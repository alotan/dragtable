steal('funcunit',function(){

module("dragtable", { 
	setup: function(){
		S.open("demo.htm");
	}
});

test("dragtable test", function(){
	/*
	 * drag col change
	 */
	S('#one th[data-header=first_name]').drag('th[data-header=last_name]', function(){
		ok( S('#one th[data-header=last_name]').next().attr('data-header') == 'first_name', 'order changed')
	})
	//reverse
	S('#one th[data-header=first_name]').drag('th[data-header=last_name]', function(){
		ok( S('#one th[data-header=first_name]').next().attr('data-header') == 'last_name', ' reverse order changed')
	})
	
	/*
	 * check table boundary
	 */
	S('#one th[data-header=color]').drag('-500 +0', function(){
		ok( S('#one th:first').attr('data-header') == 'id', 'cant be dragged past boundary')
	})
	
	
	/*
	 * handle
	 */
	S('#one th[data-header=phone_number] .dragtable-drag-handle').drag('th[data-header=id]', function(){
		ok( S('#one th:first').attr('data-header') == 'id', 'handle drag')
		
		ok( S('#one th:first').next().attr('data-header') == 'phone_number', 'drag via handle')
	})
	/*
	 * cant be dragged 
	 * notdraggable
	 */
	S('#one th[data-header=salary]').drag('-500 +0', function(){
		//alert( S('#one th[data-header=salary]').prev().attr('data-header'))
		ok( S('#one th[data-header=salary]').prev().attr('data-header') == 'color', 'notdraggable cant be dragged')
		
		
	})
	
	/*
	 * parent offset scroll
	 */
	S('#one th[data-header=last_name]').drag('+2000 +0', function(){
		ok( S('#one th[data-header=salary]').prev().attr('data-header') == 'last_name', 'notdraggable cant be dragged')
		
		
	})
	
});


});