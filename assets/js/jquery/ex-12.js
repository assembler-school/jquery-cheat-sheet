$("#check").on("change", () => {
    if ($("#check").prop('checked')) $("#result").html('Checked');
    else $("#result").innerHTML = "NO checked";
  }); 
  