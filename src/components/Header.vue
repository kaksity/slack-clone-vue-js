<template>
    <div class="header">
        <div class="header__left">
            <v-avatar class="header__avatar">
                <v-icon>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <v-icon class="header__right__clock">mdi-clock</v-icon>
        </div>
        <div class="header__search">
            <!-- Search Icon -->
            <v-icon>mdi-magnify</v-icon>
            <!-- input -->
            <input type="text" placeholder="Search Slack" name="" id="" />
        </div>
        <div class="header__right">
            <!-- help -->
            <v-icon class="header__right__help__icon">mdi-help-circle-outline</v-icon>
        </div>
    </div>
</template>
<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        color: white;
        background-color: var(--slack-color);
    }
    .header__left{
        flex: 0.3;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .header__right__clock{
        margin-left: auto;
        margin-right: 30px;
    }
    .header__search{
        flex: 0.4;
        background-color: #421f44;
        text-align: center;
        display: flex;
        padding: 0 50px;
        border: 1px gray solid;
        border-radius: 6px;
    }
    .header__search > input{
        background-color: transparent;
        border:none;
        color: white;
        min-width: 35vw;
        text-align: center;
    } 
    .header__right{
        flex: 0.3;
        display: flex;
        align-items: flex-end;
    }

    .header__right__help__icon{
        margin-left: auto;
        margin-right: 20px;
    }
</style>
