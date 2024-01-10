(() => {
  let count = 0;
  function getAllButtons() {
    return document.querySelectorAll('button.artdeco-button--2.artdeco-button--secondary') || [];
  }
  async function unfollowAll() {
    const buttons = getAllButtons();
    for (let button of buttons) {
      if (button){
      	button.click();
        await new Promise((resolve) => setTimeout(resolve, 100));

        const b_unfollow = document.querySelector('button.artdeco-button--2.artdeco-button--primary.artdeco-modal__confirm-dialog-btn');
      	if (b_unfollow){
      		b_unfollow.click();
          await new Promise((resolve) => setTimeout(resolve, 100));

          count = count + 1;
      		console.log(`Unfollow #${count}`);
      	}
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    window.scrollTo(0, 260);
  }
  async function run() {
    await unfollowAll();
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const buttons = getAllButtons();
    if (buttons.length) run();
  }
  run();
})();
