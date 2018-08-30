<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quiz_css.css">
</head>

<body>
<?php   include "delete.php"; ?>
<div class="container table-body">
    <h1 class="header-table">QUESTION DATABASE</h1>

    <form action='question_table.php' method='post' class='hidden db-table'>
        <input type='hidden' value='' name='id'>
    </form>

    <table class="data-table">
        <tbody>
        <tr>
            <th class="id-column">ID</th>
            <th class="question-column">QUESTION</th>
            <th class="action-column" colspan="2">ACTION</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "
                       <tr>
                            <td>" . $row["id"] . "</td>
                            <td>" . $row["question"] . "</td>
                            <td>
                                <a class='update-button' id='" . $row["id"] . "'  href='update_table.php?id=" . $row["id"] . "'><i class='glyphicon glyphicon-edit edit-button' ></i></a>
                            </td>
                            <td>
                                <a class='remove-button' id='" . $row["id"] . "' href='#' data-toggle='modal' data-target='#myModal'><i class='glyphicon glyphicon-trash delete-button' ></i></a>
                            </td>
                              
                        </tr>";
            }
            echo "</table>";
        } else {
            echo "0 result";
        }
        ?>
        </tbody>
    </table>
</div>


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true"></span></button>
                <h4 class="modal-title" id="myModalLabel">Confirmation</h4>
            </div>
            <div class="modal-body">
                <p>Do you want to delete?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-close" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary btn-delete" data-todo-id="">Delete</button>
            </div>
        </div>
    </div>
</div>

<footer>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/question_table.js"></script>
</footer>

</body>


</html>
