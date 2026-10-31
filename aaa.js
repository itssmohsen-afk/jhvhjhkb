<script>

        const scriptURL = "https://script.google.com/macros/s/AKfycbxknSsr3m-3e_avKgNtQOt1kthXmlDR3mmtXZaRltDa2kCBzLkMVUPRAhxRfKiZI3vjDQ/exec";

        const form = document.getElementById("rsvpForm");

        const message = document.getElementById("message");

        const submitBtn = document.getElementById("submitBtn");

        form.addEventListener("submit", function(e) {

            alert("Button is working!");

            e.preventDefault();

            const name = document.getElementById("name").value;

            const attendance = document.querySelector(

                'input[name="attendance"]:checked'

            ).value;

            const data = new URLSearchParams();

            data.append("name", name);

            data.append("attendance", attendance);

            submitBtn.disabled = true;

            submitBtn.textContent = "Submitting...";

            fetch(scriptURL, {

                method: "POST",
                mode:"no-cors",
                body: data

            })

            .then(() => {

                form.reset();

                message.textContent = "Your response has been submitted successfully!";

                message.style.color = "green";

            })

            .catch(error => {

                message.textContent = "Something went wrong. Please try again.";

                message.style.color = "red";

            })

            .finally(() => {

                submitBtn.disabled = false;

                submitBtn.textContent = "Submit";

            });

        });

    </script>