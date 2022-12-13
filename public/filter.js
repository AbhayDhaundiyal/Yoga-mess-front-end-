$(document).ready(function(){
   
    
      $("#filterable #filters input").keyup(function(t){

        if("9"!=(t.keyCode||t.which))
        {   
            var e=$(this),
            l=e.val().toLowerCase()
            n=e.parents("#filterable")
            i=n.find("#filters th").index(e.parents("th"))
            r=n.find("#c_table"),o=r.find("tbody tr")
            d=o.filter(function(){
                    return-1===$(this).find("td").eq(i).text().toLowerCase().indexOf(l)
                    });
                r.find("tbody .no-result").remove()
                o.show()
                d.hide()
                d.length===o.length&&r.find("tbody").prepend($('<tr class="no-result text-center"><td colspan="'+r.find("#head th").length+'">No result found</td></tr>'));
        }
    });
});
