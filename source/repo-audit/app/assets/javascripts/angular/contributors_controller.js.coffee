@app.controller 'ContributorsController', [ '$scope', '$http', ($scope, $http) ->
  $scope.loading = true
  $scope.order = "total"

  $http.get('/contributors').then ((response) ->
    $scope.contributions = response.data
    $scope.loading = false
  ), (response) ->
    console.log response

  $scope.actions = {commits: 3, deletions: 4, additions: 5}

  $scope.dynamicOrder = (contributor) ->
    if $scope.order == 'additions'
      contributor.month_additions
    else if $scope.order == 'deletions'
      contributor.month_deletions
    else if $scope.order =='commits'
      contributor.month_commits
    else
      contributor.month_additions + contributor.month_deletions + contributor.month_commits
]

