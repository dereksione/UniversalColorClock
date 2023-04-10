<script>
	import { tick } from 'svelte';
	// let currentTime;
	
	
</script>

<home>
	<header class="primary-header flex">
	<div>
		<p class="logo">
			<!-- {currentTime} -->
		</p>
	</div>
        <nav>
            <ul class="primary-navigation blank-list flex">
                <li>
                    <a href="https://www.google.com">
                            Ricci Albenda
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                            DMINTI
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                            FAQ
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                            Preview
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                            Purchase Now
                    </a>
                </li>
            </ul>
        </nav>
	</header>
	</home>

<style>
	.flex {
		display: flex;
		gap: var(--gap, 2rem);
	}
	
	.logo {
		margin: 2rem;
	}
	
	.primary-header {
		align-items: center;
		justify-content: space-between;
		background-color: black;
        margin: 0;
        padding: 0;
	}
	
	.blank-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.primary-navigation {
		
	}

</style>