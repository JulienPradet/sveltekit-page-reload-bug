<script context="module">
    export const load = ({session}) => {
        return {
            props: {
                form: session.form
            }
        }
    }
</script>

<script>
    export let form = null;
</script>

<h1>Login page</h1>

<a href="/">Back to home</a>

<p>I've added the login form logic, but the issue would still stand without sessions, forms and only a static login page + a POST endpoint in the login.js file.</p>

<form method="post" action="/login">
    {#if form?.error}
        <p role="alert">Invalid form. Please enter an email.</p>
    {/if}

    <label for="email">Email</label>
    <input type="email" name="email" id="email"/>
    
    <button>Submit</button>
</form>