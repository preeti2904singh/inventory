


$(document).ready(function () {
    var tr;
    
    var json = [
                {
                    "Item":"Maggi",
                    "Place":"Ashwathnagar",
                    "Time":"10:00am"
                },
                {
                    "Item":"Bread",
                    "Place":"Indiranagar",
                    "Time":"4:00pm"
                },
                {
                    "Item":"Eggs",
                    "Place":"Ashwathnagar",
                    "Time":"12:00pm"
                },
                {
                    "Item":"Burger",
                    "Place":"Domlur",
                    "Time":"12:00pm"
                }
            ];
    //Display table data
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td contenteditable='true'>" + json[i].Item + "</td>");
        tr.append("<td contenteditable='false'>" + json[i].Place + "</td>");
        tr.append("<td contenteditable='false'>" + json[i].Time + "</td>");
        tr.append("<td><div class='edit_button' data-value='Update' value='Update' class='edit'>Update</div>  &nbsp;| &nbsp; <span class='delete' value='Delete' onclick='delete_row(this)'>Delete</span></td>");
        $('.table').append(tr);
    }

    //add row in the table
    $(".add-row").click(function(){
        var item = $("#item").val();
        var place = $("#place").val();
        var time = $("#time").val();
        var markup = "<tr><td>" + item + "</td><td>" + place + "</td><td>" + time + "</td><td><div class='edit_button' data-value='Update' value='Update' class='edit'>Update</div>  &nbsp;| &nbsp; <span class='delete' value='Delete' onclick='delete_row(this)'>Delete</span></tr>";
        if($('#item, #place, #time').val() == ''){
          alert('Input can not be left blank');
        }else{
            $("table tbody").append(markup);
            $('#item, #place, #time').closest('form').find("input[type=text]").val("");
        }
    });

    //edit row in the table
    $('.edit_button').click(function () {
        var $this = $(this);
        var tds = $this.closest('tr').find('td').filter(function() {
            return $(this).find('.edit_button').length === 0;
        });
        if ($this.data('value') === 'Update') {
           $this.data('value', 'Save');
           $this.html('Save');
           tds.prop('contenteditable', true);
           tds.focus();
        } else {
           $this.data('value', 'Update');
           $this.html('Update');
           tds.prop('contenteditable', false);
        }

    });
});

//search function
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//delete row from the table
function delete_row(row){
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
}

