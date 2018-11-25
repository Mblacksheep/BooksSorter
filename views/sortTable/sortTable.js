angular.module('sortTable.sortTable', [])

.controller('SortTableCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

	$scope.sortEditionYear = null;
	$scope.sortAuthor = 'author';
	$scope.sortTitle = 'title';

	$scope.listOrder = [null, null, null];

	$scope.bookList = [
		{   id: '1',
			title: 'Java How to Program',
			author: 'Deitel & Deitel',
			editionYear: '2007'
		},
		{   id: '2', 
			title: 'Patterns of Enterprise Application Architeture',
			author: 'Martin Fowler',
			editionYear: '2002'
		},
		{   id: '3',
			title: 'Head First Design Patterns',
			author: 'Elisabeth Freeman',
			editionYear: '2004'
		},
		{   id: '4', 
			title: 'Internet & World Wide Web: How to Program',
			author: 'Deitel & Deitel',
			editionYear: '2007'
		}
	];

	// editionYear = sort ascending
	// -editionYear = sort descending
	// null = not sorted
	$scope.setEditionYearSort = function() {
		if($scope.sortEditionYear == null) { $scope.sortEditionYear = 'editionYear'; } 
		else if($scope.sortEditionYear == 'editionYear') { $scope.sortEditionYear = '-editionYear'; } 
		else { $scope.sortEditionYear = null; }

		filterArray();
	}

	// author = sort ascending
	// -author = sort descending
	// null = not sorted
	$scope.setAuthorSort = function() {
		if($scope.sortAuthor == null) { $scope.sortAuthor = 'author'; } 
		else if($scope.sortAuthor == 'author') { $scope.sortAuthor = '-author'; } 
		else { $scope.sortAuthor = null; }

		filterArray();
	}	

	// title = sort ascending
	// -title = sort descending
	// null = not sorted
	$scope.setTitleSort = function() {
		if($scope.sortTitle == null) { $scope.sortTitle = 'title'; } 
		else if($scope.sortTitle == 'title') { $scope.sortTitle = '-title'; } 
		else { $scope.sortTitle = null; }

		filterArray();
	}

	filterArray = function (){
		$scope.listOrder = [$scope.sortEditionYear, $scope.sortAuthor, $scope.sortTitle];

		_filtered = $scope.listOrder.filter(function (el) {
		  return el != null;
		});

		$scope.listOrder =  _filtered;
	}

	filterArray();

	$scope.openModalInsertBoook = function() {
		modalInstance =	$uibModal.open({
			animation: false,
			templateUrl: 'templates/modal/insertBook.modal.html',
			controller: 'ModalInsertBookCtrl',
			backdrop: 'static',
			keyboard: false,
			size: 'md'
		});

		modalInstance.result.then(function (_book) {
			if(_book){
				$scope.bookList.push(_book);
			}
		});
	}
}])

.controller('ModalInsertBookCtrl', function($scope, $uibModalInstance) {

	$scope.insertBook = function() {
		$scope.book.editionYear = $scope.book.editionYear.getUTCFullYear();
		$uibModalInstance.close($scope.book);
	};

	$scope.closeInsertBook = function() {
		$uibModalInstance.close(false);
	}

	// DatePicker config
	$scope.open = function($event) {
		$scope.status.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yyyy',
		startingDay: 1,
		minMode: 'year'
	};
	$scope.formats = ['yyyy'];
	$scope.format = $scope.formats[0];

	$scope.status = {
		opened: false
	};
});


