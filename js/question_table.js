$(document).ready(function () {
    $(document).on('click', '.remove-button', function () {
        var row = $(this).attr('id');console.log(rowBtn);

        $("input[name='id']").attr('value',row);
        $('#myModal').find('.btn-delete').attr('data-todo-id', row);
    });

    $(document).on('click', '.btn-delete', function () {
        var idElement = $(this).attr('data-todo-id');

        $('.db-table').submit();
        $('#' + idElement).remove();
        $('#myModal').modal('hide')
    });

    $(document).on('click', '.update-btn', function () {
        $('.form1').submit();
    });
});


