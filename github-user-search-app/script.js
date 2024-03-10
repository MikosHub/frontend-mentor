function toggleMode() {
  const isDark = $("body").attr("data-mode") === "dark";
  if (isDark) {
    $("body").attr("data-mode", "light");
    $("#modeLabel").text("DARK");
    $("#modeIcon")
      .attr("src", "./images/icon-moon.svg")
      .attr("alt", "moon icon");
  } else {
    $("body").attr("data-mode", "dark");
    $("#modeLabel").text("LIGHT");
    $("#modeIcon").attr("src", "./images/icon-sun.svg").attr("alt", "sun icon");
  }
}

function displayUserData(data) {
  console.log(data);
  $("#userImage")
    .attr("src", data.avatar_url)
    .attr("alt", `Photo of ${data.name}`);
  $("#userName").text(data.name);
  $("#userHandle").text(`@${data.login}`);
  if (data.created_at) {
    const date = new Date(data.created_at);
    $("#joinDate").text(
      `Joined ${date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`
    );
  } else {
    $("#joinDate").text("");
  }

  if (data.bio) $("#userDescription").text(data.bio);
  else $("#userDescription").text("This profile has no bio");

  $("#repos").text(data.public_repos);
  $("#followers").text(data.followers);
  $("#following").text(data.following);

  const otherInfo = {
    location: { text: data.location, isLink: false },
    website: { text: data.blog, isLink: true },
    twitter: { text: data.twitter_username, isLink: false },
    company: { text: data.company, isLink: false },
  };

  for (const key in otherInfo) {
    if (otherInfo[key].text) {
      let content = otherInfo[key].text;
      if (otherInfo[key].isLink)
        content = `<a href="${otherInfo[key].text}" target="_blank">${otherInfo[key].text}</a>`;

      $(`#${key}`)
        .html(content)
        .closest(".iconContainer")
        .removeClass("not-available");
    } else {
      $(`#${key}`)
        .text("Not Available")
        .closest(".iconContainer")
        .addClass("not-available");
    }
  }

  $("#result").show();
}

function showError() {
  $("#result").hide();
  $("#error").show();
}

function fetchUserData() {
  const userName = $("#nameInput").val();
  if (!userName) return;

  $.getJSON(`https://api.github.com/users/${userName}`)
    .done(displayUserData)
    .fail(showError);
}

$(document).ready(() => {
  $("#result").hide();

  // Event bindings
  $("#modeSelect").click(toggleMode);
  $("#search button").click(fetchUserData);
  $("#nameInput").on("input", () => {
    $("#error").hide();
  });
  $("#nameInput").on("keyup", (e) => {
    if (e.which === 13) fetchUserData();
  });
});
